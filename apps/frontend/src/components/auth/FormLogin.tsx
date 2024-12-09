import React from "react";
import Logo from "../shared/Logo";
import LogoLogin from "../shared/LogoLogin";
import InputForm from "./InputForm";
import Button from "./Button";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

const FormLogin = () => {
  return (
    <div className="flex flex-col justify-start items-center  w-[631px] h-[748px] bg-bg-2-lightBlack rounded-xl p-8 ">
      <LogoLogin />
      <div className="flex flex-col gap-5 justify-center items-center  ">
        <span className="font-bold text-2xl">Entre com sua conta</span>
        <div className=" w-[494px] flex flex-col gap-2">
          <InputForm texto="Email" type="email" />
          <InputForm texto="Senha" type="password" />
        </div>
        <div className="flex justify-end  flex-1 w-full h-full">
          <Link href={"#"}>
            <span className="text-[#979797]">Esqueceu a senha?</span>
          </Link>
        </div>
        <Button cor="verde">Login</Button>
        <span>ou</span>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-logo-red rounded-full w-[61px] h-[60px] flex justify-center items-center">
            <GoogleIcon />
          </div>
          <div className="flex flex-col text-center gap-1">
            <span className="text-xl">
              Ainda não possui conta?{" "}
              <span className="text-[#22C55E]">
                Cadastre-se{" "}
                <Link href={"#"} className="linkStyled">
                  aqui
                </Link>
              </span>
            </span>
            <span className="text-[#A1A1AA] text-[15px]">
              ou faça login pelo Google clicando no G acima.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
