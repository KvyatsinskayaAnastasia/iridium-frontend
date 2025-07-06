import React, {useEffect, useState} from "react";
import {
    Button,
    Checkbox, Col,
    Flex,
    Form,
    Input,
    InputNumber,
    Layout,
    message,
    Radio, Row,
    Select,
    Space,
    theme,
    Upload
} from "antd";
import {LoadingOutlined, MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import avatar from "../../../assets/images/defaultAvatar.jpg"

const CreateCharacter = (props) => {
    const [form] = Form.useForm();
    const [selectedMagics, setSelectedMagics] = useState([]);

    const createCharacter = (target) => {
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
        target.magics && target.magics.forEach(magic => {
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
        console.log(target);
        const characterData = new FormData();
        characterData.append("character", new Blob([JSON.stringify(character)], {type: 'application/json'}));
        characterData.append("image", target.avatar)
        console.log({character: character, image: target.avatar})
        props.addCharacter(characterData);
        // props.addCharacter({character: character, image: target.avatar});
    }

    const generateCharacter = () => {
        props.generateCharacter({characterLevel: 10});
    }

    useEffect(() => {
        form.setFieldsValue({age: props.character.age});
        form.setFieldsValue({name: props.character.name});
        form.setFieldsValue({temper: props.character.temper});
        form.setFieldsValue({raceId: props.character.raceId});
        form.setFieldsValue({gender: props.character.gender});
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
        if (props.character.magics) {
            let magics = props.character.magics
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
        } else {
            form.setFieldsValue({
                magics: null
            });
        }
    }, [props.character]);

    const getSpellsOptions = (spells) => {
        return spells.map(spell => {
            return <Checkbox value={`${spell.id}`}>{spell.name}</Checkbox>
        });
    }

    const changeSelectedMagic = (e, name) => {
        const newSelectedMagics = [...selectedMagics];
        newSelectedMagics[name] = e;
        setSelectedMagics(newSelectedMagics);
    }

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const beforeUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(avatar);
    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        console.log(info);
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, url => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <button style={{border: 0, background: 'none'}} type="button">
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
        </button>
    );

    const dummyRequest = ({file, onSuccess}) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    function getAbilitiesList(type, placeholder, buttonLabel) {
        return <Flex vertical>
            <Form.List name={`${type.toLowerCase()}Abilities`}>
                {(fields, {add, remove}) => (
                    <>
                        {fields.map(({key, name, ...restField}) => (
                            <Space align="baseline" key={key}>
                                <Space.Compact>
                                    <Form.Item
                                        {...restField}
                                        name={[name, `${type.toLowerCase()}Ability`]}
                                    >
                                        <Select placeholder={placeholder} style={{width: "275px"}}>
                                            {props.allAbilities && props.allAbilities.filter(ability => ability.abilityType === type).map(ability => {
                                                return <Select.Option
                                                    value={ability.id}>{ability.name}</Select.Option>
                                            })}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, `${type.toLowerCase()}AbilityLevel`]}
                                    >
                                        <InputNumber style={{width: "60px"}}/>
                                    </Form.Item>
                                </Space.Compact>
                                <MinusCircleOutlined style={{width: "15px"}} onClick={() => {
                                    remove(name);
                                }}/>
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" style={{width: "350px"}} onClick={() => {
                                add()
                            }} block icon={<PlusOutlined/>}>
                                {buttonLabel}
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Flex>
    }

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
                    <Flex vertical>
                        <Flex justify="space-around" gap="middle" align="center">
                            <Flex vertical>
                                <Form.Item
                                    name="avatar"
                                    getValueFromEvent={({file}) => file.originFileObj}
                                >
                                    <Upload
                                        accept="image/png, image/jpeg, image/jpg"
                                        maxCount={1}
                                        listType="picture"
                                        showUploadList={false}
                                        customRequest={dummyRequest}
                                        beforeUpload={beforeUpload}
                                        onChange={handleChange}
                                    >
                                        {imageUrl ?
                                            <img src={imageUrl}
                                                 alt="avatar"
                                                 style={{
                                                     width: "250px",
                                                     height: "350px"
                                                 }}
                                            /> : uploadButton
                                        }
                                    </Upload>
                                </Form.Item>
                            </Flex>
                            <Flex vertical style={{width: "35%"}}>
                                <Form.Item label="Имя" name="name">
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Раса" name="raceId">
                                    <Select placeholder="Выберите расу">
                                        {!!props.allRaces && props.allRaces.map(race => {
                                            return <Select.Option key={race.id}
                                                                  value={race.id}>{race.name}</Select.Option>
                                        })}
                                    </Select>
                                </Form.Item>
                                <Form.Item name="nationality" label="Гражданство">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="aim" label="Основная цель">
                                    <Input/>
                                </Form.Item>
                            </Flex>
                            <Flex vertical style={{width: "35%"}} gap="small">
                                <Form.Item name="appearance" label="Описание">
                                    <Input.TextArea autoSize={{minRows: 8, maxRows: 8}}/>
                                </Form.Item>
                                <Flex align="flex-end" gap="middle">
                                    <Form.Item label="Возраст" name="age">
                                        <InputNumber/>
                                    </Form.Item>
                                    <Form.Item layout="vertical" name="gender" label="Пол">
                                        <Radio.Group>
                                            <Radio value="MALE">Мужской</Radio>
                                            <Radio value="FEMALE">Женский</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item layout="vertical" name="characterType" label="Тип персонажа">
                                        <Radio.Group>
                                            <Radio value="NPC">NPC</Radio>
                                            <Radio value="PLAYER">Игровой</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex vertical>
                            <Form.Item name="biography" label="Биография">
                                <Input.TextArea autoSize={{minRows: 6, maxRows: 6}}/>
                            </Form.Item>
                            <Form.Item name="temper" label="Характер">
                                <Input.TextArea autoSize={{minRows: 3, maxRows: 3}}/>
                            </Form.Item>
                            <Form.List name="magics">
                                {(fields, {add, remove}) => (
                                    <>
                                        {fields.map(({key, name, ...restField}) => (
                                            <Flex vertical>
                                                <Flex align="baseline" gap="small">
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'magic']}
                                                        initialValue={props.allMagic[0].id}
                                                    >
                                                        <Select style={{width: "200px"}}
                                                                onChange={(e) => changeSelectedMagic(e, name)}>
                                                            {props.allMagic && props.allMagic.map(magic => {
                                                                return <Select.Option
                                                                    value={magic.id}>{magic.name}</Select.Option>
                                                            })}
                                                        </Select>
                                                    </Form.Item>
                                                    <MinusCircleOutlined onClick={() => {
                                                        setSelectedMagics(
                                                            selectedMagics.filter(selectedMagic =>
                                                                selectedMagics[name] !== selectedMagic
                                                            )
                                                        );
                                                        remove(name);
                                                    }}/>
                                                </Flex>
                                                <Row gutter={[24, 0]}>
                                                    <Form.Item noStyle>
                                                        {selectedMagics[name] && props.allMagic.find(magic => magic.id === selectedMagics[name]).leveledSpells.map(ls => {
                                                            return (
                                                                <Col span={4} >
                                                                    <Form.Item
                                                                        label={`Круг ${ls.level}:`}
                                                                        {...restField}
                                                                        name={[name, `spells${ls.level}`]}
                                                                    >
                                                                        <Checkbox.Group>
                                                                            <Flex vertical>
                                                                                {getSpellsOptions(ls.spells)}
                                                                            </Flex>
                                                                        </Checkbox.Group>
                                                                    </Form.Item>
                                                                </Col>
                                                            )
                                                        })
                                                        }
                                                    </Form.Item>
                                                </Row>
                                            </Flex>
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
                            <Flex justify="space-around" gap="unset">
                                {getAbilitiesList('BASIC', 'Выберите основную способность', 'Добавить основную способность')}
                                {getAbilitiesList('GENERAL', 'Выберите общую способность', 'Добавить общую способность')}
                                {getAbilitiesList('FIGHTING', 'Выберите боевую способность', 'Добавить боевую способность')}
                            </Flex>
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
                        </Flex>
                    </Flex>
                </Form>
            </Layout.Content>
        </Layout>
    )
}

export default CreateCharacter;