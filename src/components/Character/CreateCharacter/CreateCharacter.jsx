import React, { useState } from "react";
import { Button, Checkbox, Form, Input, InputNumber, Layout, Radio, Select, Space, theme } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const CreateCharacter = (props) => {
  const [form] = Form.useForm();
  const [selectedMagics, setSelectedMagics] = useState([]);

  const createCharacter = (target) => {
    console.log(target);
    let character = {
      name: target.name,
      age: target.age,
      raceId: target.raceId,
      gender: target.gender,
      appearance: target.appearance,
      temper: target.temper,
      biography: target.biography,
      aim: target.aim,
      nationality: target.nationality,
      characterType: target.characterType,
      spells: [],
      abilities: []
    }
    target.magics.forEach(magic => {
      if (magic.spells1) {
        character.spells = [...character.spells, ...magic.spells1]
      }
      if (magic.spells2) {
        character.spells = [...character.spells, ...magic.spells2]
      }
      if (magic.spells3) {
        character.spells = [...character.spells, ...magic.spells3]
      }
      if (magic.spells4) {
        character.spells = [...character.spells, ...magic.spells4]
      }
      if (magic.spells5) {
        character.spells = [...character.spells, ...magic.spells5]
      }
    });
    target.basicAbilities.forEach(ability => {
      character.abilities.push({
        abilityId: ability.basicAbility,
        abilityType: 'BASIC',
        level: ability.basicAbilityLevel
      })
    });
    target.fightingAbilities.forEach(ability => {
      character.abilities.push({
        abilityId: ability.fightingAbility,
        abilityType: 'FIGHTING',
        level: ability.fightingAbilityLevel
      })
    });
    target.generalAbilities.forEach(ability => {
      character.abilities.push({
        abilityId: ability.generalAbility,
        abilityType: 'GENERAL',
        level: ability.generalAbilityLevel
      })
    });

    console.log(character);
    props.addCharacter(character);
  }

  const generateCharacter = () => {
    props.generateCharacter({ characterLevel: 10 });
    form.setFieldsValue({ age: props.character.age });
    form.setFieldsValue({ name: props.character.name });
    form.setFieldsValue({ temper: props.character.temper });
    form.setFieldsValue({ raceId: props.character.raceId });
    form.setFieldsValue({ gender: props.character.gender });
    form.setFieldsValue({
      basicAbilities: props.character.abilities
        .filter(ability => ability.abilityType === 'BASIC')
        .map(ability => {
          return {
            basicAbility: ability.abilityId,
            basicAbilityLevel: ability.level
          }
        })
    });
    form.setFieldsValue({
      generalAbilities: props.character.abilities
        .filter(ability => ability.abilityType === 'GENERAL')
        .map(ability => {
          return {
            generalAbility: ability.abilityId,
            generalAbilityLevel: ability.level
          }
        })
    });
    form.setFieldsValue({
      fightingAbilities: props.character.abilities
        .filter(ability => ability.abilityType === 'FIGHTING')
        .map(ability => {
          return {
            fightingAbility: ability.abilityId,
            fightingAbilityLevel: ability.level
          }
        })
    });
    let magics = props.character.magics && props.character.magics
      .map(mag => {
        return {
          magic: mag.id,
          spells1: mag.spells.filter(spell => spell.level === 1).map(spell => spell.id),
          spells2: mag.spells.filter(spell => spell.level === 2).map(spell => spell.id),
          spells3: mag.spells.filter(spell => spell.level === 3).map(spell => spell.id),
          spells4: mag.spells.filter(spell => spell.level === 4).map(spell => spell.id),
          spells5: mag.spells.filter(spell => spell.level === 5).map(spell => spell.id)
        }
      })
    form.setFieldsValue({
      magics: magics
    });
    setSelectedMagics(magics.map(mag => mag.magic));
  }

  const getSpellsOptions = (spells) => {
    return spells.map(spell => {
      return { label: spell.name, value: spell.id }
    });
  }

  const changeSelectedMagic = (e, name) => {
    const newSelectedMagics = [...selectedMagics];
    newSelectedMagics[name] = e;
    setSelectedMagics(newSelectedMagics);
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Layout.Content style={{
        background: colorBgContainer,
        padding: 10
      }}>
        <Form
          form={form}
          style={{
            margin: '10px'
          }}
          layout="vertical"
          name="createCharacterForm"
          onFinish={createCharacter}
        >
          <Form.Item
            style={{
              display: 'inline-block',
              width: '15%',
              padding: 5
            }}
            label="Имя"
            name="name">
            <Input/>
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              width: '15%',
              padding: 5
            }}
            label="Раса"
            name="raceId"
          >
            <Select placeholder="Выберите расу">
              {!!props.allRaces && props.allRaces.map(race => {
                return <Select.Option key={race.id} value={race.id}>{race.name}</Select.Option>
              })}
            </Select>
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              width: '10%',
              padding: 5
            }}
            label="Возраст"
            name="age"
          >
            <InputNumber/>
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              width: '25%',
              padding: 5,
              verticalAlign: 'bottom'
            }}
            layout="horizontal"
            name="gender"
            label="Пол"
          >
            <Radio.Group>
              <Radio value="MALE">Мужской</Radio>
              <Radio value="FEMALE">Женский</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              width: '35%',
              padding: 5,
              verticalAlign: 'bottom'
            }}
            layout="horizontal"
            name="characterType"
            label="Тип персонажа">
            <Radio.Group>
              <Radio value="NPC">NPC</Radio>
              <Radio value="PLAYER">Игровой</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            style={{
              padding: 5
            }}
            name="appearance"
            label="Описание"
          >
            <Input.TextArea/>
          </Form.Item>
          <Form.Item
            style={{
              padding: 5
            }}
            name="temper"
            label="Характер"
          >
            <Input.TextArea/>
          </Form.Item>
          <Form.Item
            style={{
              padding: 5
            }}
            name="biography"
            label="Биография"
          >
            <Input.TextArea/>
          </Form.Item>
          <Form.Item
            style={{
              padding: 5
            }}
            name="aim"
            label="Цель"
          >
            <Input/>
          </Form.Item>
          <Form.Item
            style={{
              padding: 5
            }}
            name="nationality"
            label="Гражданство"
          >
            <Input/>
          </Form.Item>
          <Form.List
            style={{
              padding: 5
            }}
            name="magics"
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    align="baseline"
                  >
                    <Form.Item
                      style={{
                        padding: 5
                      }}
                      {...restField}
                      name={[name, 'magic']}
                      initialValue={props.allMagic[0].id}
                    >
                      <Select placeholder="Выберите магию" onChange={(e) => changeSelectedMagic(e, name)}>
                        {props.allMagic && props.allMagic.map(magic => {
                          return <Select.Option value={magic.id}>{magic.name}</Select.Option>
                        })}
                      </Select>
                    </Form.Item>
                    <Form.Item noStyle>
                      {selectedMagics[name] && props.allMagic.find(magic => magic.id === selectedMagics[name]).leveledSpells.map(ls => {
                        return (
                          <Form.Item
                            style={{
                              display: 'inline-block',
                              padding: 5,
                              width: '20%'
                            }}
                            label={`Круг ${ls.level}:`}
                            {...restField}
                            name={[name, `spells${ls.level}`]}
                          >
                            <Checkbox.Group options={getSpellsOptions(ls.spells)}/>
                          </Form.Item>
                        )
                      })
                      }
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => {
                      setSelectedMagics(
                        selectedMagics.filter(selectedMagic =>
                          selectedMagics[name] !== selectedMagic
                        )
                      );
                      remove(name);
                    }}/>
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => {
                    setSelectedMagics([
                      ...selectedMagics,
                      props.allMagic[0].id
                    ]);
                    add()
                  }} block icon={<PlusOutlined/>}>
                    Добавить магию
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.List
            style={{
              padding: 5
            }}
            name="basicAbilities"
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    align="baseline"
                  >
                    <Form.Item
                      style={{
                        padding: 5
                      }}
                      {...restField}
                      name={[name, 'basicAbility']}
                    >
                      <Select placeholder="Выберите основную способность">
                        {props.allAbilities && props.allAbilities.filter(ability => ability.abilityType === "BASIC").map(ability => {
                          return <Select.Option value={ability.id}>{ability.name}</Select.Option>
                        })}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      style={{
                        padding: 5
                      }}
                      {...restField}
                      name={[name, 'basicAbilityLevel']}
                    >
                      <InputNumber/>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => {
                      remove(name);
                    }}/>
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => {
                    add()
                  }} block icon={<PlusOutlined/>}>
                    Добавить основную способность
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.List
            style={{
              padding: 5
            }}
            name="fightingAbilities"
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    align="baseline"
                  >
                    <Form.Item
                      style={{
                        padding: 5
                      }}
                      {...restField}
                      name={[name, 'fightingAbility']}
                    >
                      <Select placeholder="Выберите боевую способность">
                        {props.allAbilities && props.allAbilities.filter(ability => ability.abilityType === "FIGHTING").map(ability => {
                          return <Select.Option value={ability.id}>{ability.name}</Select.Option>
                        })}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      style={{
                        padding: 5
                      }}
                      {...restField}
                      name={[name, 'fightingAbilityLevel']}
                    >
                      <InputNumber/>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => {
                      remove(name);
                    }}/>
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => {
                    add()
                  }} block icon={<PlusOutlined/>}>
                    Добавить боевую способность
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.List
            style={{
              padding: 5
            }}
            name="generalAbilities"
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    align="baseline"
                  >
                    <Form.Item
                      style={{
                        padding: 5
                      }}
                      {...restField}
                      name={[name, 'generalAbility']}
                    >
                      <Select placeholder="Выберите общую способность">
                        {props.allAbilities && props.allAbilities.filter(ability => ability.abilityType === "GENERAL").map(ability => {
                          return <Select.Option value={ability.id}>{ability.name}</Select.Option>
                        })}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      style={{
                        padding: 5
                      }}
                      {...restField}
                      name={[name, 'generalAbilityLevel']}
                    >
                      <InputNumber/>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => {
                      remove(name);
                    }}/>
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => {
                    add()
                  }} block icon={<PlusOutlined/>}>
                    Добавить общую способность
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button block onClick={() => generateCharacter()}>
              Сгенерировать персонажа
            </Button>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Layout.Content>
    </Layout>
  )
}

export default CreateCharacter;