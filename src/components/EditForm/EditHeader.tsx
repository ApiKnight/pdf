import { setTemplateCoding, useTemplateCoding } from "@/store/templateCoding";
import { Button, DatePicker, Input, Radio, RadioChangeEvent } from "antd";
import { ChangeEvent, useCallback, useState } from "react";

function EditHeader() {
    const template = useTemplateCoding();
    const [aboutUrlInfoArray, setAboutUrlInfoArray] = useState<Record<string, string>[]>([]);

    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemplateCoding(
            value => (
                {
                    ...value,
                    name: e.target.value
                }
            )
        );
    }, []);

    const handleBirthDateChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemplateCoding(
            value => (
                {
                    ...value,
                    birthDate: e.target.value
                }
            )
        );
    },[]);

    const handleCurrentAddressChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemplateCoding(value => (
            {
                ...value,
                currentAddress: e.target.value
            }
        ))
    },[]);

    const handleHomeAddressChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemplateCoding(value => (
            {
                ...value,
                homeAddress: e.target.value
            }
        ))
    },[])

    const handlePhoneChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemplateCoding(value => (
            {
                ...value,
                phone: e.target.value
            }
        ))
    },[]);

    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTemplateCoding(value => (
            {
                ...value,
                email: e.target.value
            }
        ))
    },[]);

    const handleGenderChange = useCallback((e: RadioChangeEvent) => {
        setTemplateCoding(value => (
            {
                ...value,
                gender: e.target.value
            }
        ))
    },[]);
    
    return (
        <div>
            <Input
                name="name"
                placeholder="请输入您的名字"
                required
                onChange={handleNameChange}
                value={template?.name}
            />
            <DatePicker
                name="birthDate"
                placeholder="出生日期"
                onChange={handleBirthDateChange}
            />
            <Input
                name="currentAddress"
                placeholder="请输入您的现居住地址"
                onChange={handleCurrentAddressChange}
                value={template?.currentAddress}
            />
            <Input
                name="homeAddress"
                placeholder="请输入您的家乡地址"
                onChange={handleHomeAddressChange}
                value={template?.homeAddress}
            />
            <Input
                name="phone"
                placeholder="请输入您的手机号"
                required
                onChange={handlePhoneChange}
                value={template?.phone}
            />
            <Input
                name="email"
                placeholder="请输入您的电子邮箱"
                required
                onChange={handleEmailChange}
                value={template?.email}
            />
            <Button disabled>
                添加一个个人链接
            </Button>
            {
                aboutUrlInfoArray?.map((item, index) => {
                    return (
                        <div key={index}>
                            <Input name="aboutUrlKey" placeholder="请输入个人链接名字" />
                            <Input name="aboutUrlValue" placeholder="请输入地址" />
                        </div>
                    )
                })
            }
            <Radio.Group name="gender" onChange={handleGenderChange}>
                <Radio value="man">男</Radio>
                <Radio value="woman">女</Radio>
            </Radio.Group>
        </div>
    )
}

export default EditHeader;