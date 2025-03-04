import Form from "next/form";
import registerAction from "./registerAction";

export default function SignUp() {
  return (
    <div>
      <Form action={registerAction}>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" name="name" placeholder="João Silva" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="joao.silva@example.com"
          />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="password" name="password" placeholder="********" />
        </div>
        <button type="submit">enviar</button>
      </Form>
    </div>
  );
}
