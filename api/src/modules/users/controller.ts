import { Request, Response } from 'express';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../prisma';
import { MailtrapClient } from 'mailtrap';

const mailTrapClient = new MailtrapClient({
  token: String(process.env.MAILTRAP_API_TOKEN),
});

const sender = {
  email: "andrelucastrevizan@gmail.com",
  name: "Mailtrap Test"
};

const recipients = [
  {
    email: "trevizan.al@gmail.com",
  }
];

const generateEmailCode = async () => {
  let date = Date.now().toString();

  let code = '';

  for (let i = 0; i < date.length; i++) {
    if (i >= 8) {
      code = code + date[i];
    }
  }

  return code;
}

const retrieved_data = {
  id: true,
  name: true,
  email: true,
  createdAt: true,
  updatedAt: true,
};

export const createUser = async (
  req: Request,
  res: Response
) => {
  const {
    name,
    email,
    password
  } = req.body;

  if (name == '') {
    throw new Error('Preencha o campo nome');
  }

  if (email == '') {
    throw new Error('Preencha o campo e-mail');
  }

  if (password == '') {
    throw new Error('Preencha o campo senha');
  }

  const valid_email = await prisma.user.findFirst({
    where: { email }
  });

  if (valid_email) {
    throw new Error('E-mail já cadastrado');
  }

  const hashed_password = await hash(password, 8);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashed_password,
    },
    select: retrieved_data
  });

  res.status(201).json({ user });
}

export const userSignIn = async (
  req: Request,
  res: Response
) => {

  const {
    email,
    password
  } = req.body;

  if (email == '') {
    throw new Error('Preencha o campo e-mail');
  }

  if (password == '') {
    throw new Error('Preencha o campo senha');
  }

  const valid_user = await prisma.user.findFirst({
    where: { email },
  });

  if (!valid_user) {
    throw new Error('E-mail ou senha inválidos');
  }

  const matched_password = await compare(password, valid_user.password);

  if (!matched_password) {
    throw new Error('E-mail ou senha inválidos');
  }

  const payload = { id: valid_user.id };

  const token = sign(payload, String(process.env.API_PASSWORD));

  res.json({ token });
}

export const listUsers = async (
  req: Request,
  res: Response
) => {

  const users = await prisma.user.findMany({
    select: retrieved_data
  });

  res.json({ users });
}

export const userDetails = async (
  req: Request,
  res: Response
) => {

  const user = await prisma.user.findFirst({
    where: {
      id: req.user.id,
    },
    select: retrieved_data,
  });

  res.json({ user });
}

export const checkEmail = async (
  req: Request,
  res: Response
) => {

  const email = req.params.email as string;

  if (!email) {
    throw new Error("API: Não recebemos o e-mail informado");
  }

  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) {
    throw new Error("API: Não encontramos nenuma conta com o e-mail informado");
  }

  let code = await generateEmailCode();

  try {
    await mailTrapClient.send({
      from: sender,
      to: recipients,
      subject: "E-mail Check Code - Expanse Tracker App",
      text: `Seu código é: ${code}`,
      category: "Integration Test"
    });
  } catch (error) {
    console.log(error);
  }

  res.json({ code }).end();
}
