'use client'
import React from 'react';
import axios from 'axios';
import {AiFillGithub} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {useCallback, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "@/app/components/Modals/Modal";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        setIsLoading(true);
        axios.post("/api/register", data).then(r =>
            registerModal.onClose()).catch(e => {
            console.log(e);
        }).finally(() => {
            setIsLoading(false);
        })
    }
    return (
        <Modal disabled={isLoading}
               isOpen={registerModal.isOpen}
               title={"Register"}
               actionLabel={'Continue'}
               onClose={registerModal.onClose}
               onSubmit={handleSubmit(onSubmit)}
        />
    );
};

export default RegisterModal;