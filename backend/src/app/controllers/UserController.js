/* eslint-disable eqeqeq */
import * as Yup from 'yup';
import nodemailer from 'nodemailer';
import User from '../models/User';
import Aluno from '../models/Aluno';
import Professor from '../models/Professor';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      registration: Yup.number().required().integer(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExists = await User.findOne({
      where: { registration: req.body.registration },
    });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const { id, registration, provider } = await User.create(req.body);

    return res.json({
      id,
      registration,
      provider,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      registration: Yup.number().integer(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { registration, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (registration != user.registration) {
      const userExists = await User.findOne({
        where: { registration },
      });
      if (userExists) {
        return res.status(400).json({ error: 'User already exist' });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, provider } = await user.update(req.body);
    return res.json({
      id,
      registration,
      provider,
    });
  }

  async index(req, res) {
    const allusers = await User.findAll({
      attributes: ['id', 'registration'],
    });

    return res.json(allusers);
  }

  async updateAluno(req, res) {
    const schema = Yup.object().shape({
      matricula_aluno: Yup.number().required(),
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExists = await Aluno.findOne({
      where: { email: req.body.email },
    });

    const matriculaExist = await Aluno.findOne({
      where: { matricula_aluno: req.body.matricula_aluno },
    });

    if (matriculaExist) {
      return res.status(400).json({ error: 'Usuário já existente' });
    }

    const provider = true;

    await transporter.sendMail({
      subject: 'Matricula e Liberação de Acesso - SISTEMA E-ACADEMY',
      from: 'Equipe E-ACADEMY <eacademy.adm@gmail.com>',
      to: [`${userExists.email}`],
      html: `
      <html>
      <body>
        <strong>ACESSO LIBERADO</strong></br>
        <p>Olá, sua matricula foi gerada, ela é: ${req.body.matricula_aluno}</p>
        <p>Para acessar o sistema, basta usar seu e-mail e a senha que você criou no momento do cadastro</p>
      </body>
    </html>
      `,
    });

    await userExists.update({ ...req.body, provider });

    return res.json('Aluno liberado com sucesso!');
  }

  async updateProf(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      matricula_prof: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const matriculaExists = await Professor.findOne({
      where: { matricula_prof: req.body.matricula_prof },
    });
    if (matriculaExists) {
      return res.status(400).json({ error: 'Usuário já existente' });
    }
    const provider = true;

    const userExists = await Professor.findOne({
      where: { email: req.body.email },
    });

    await transporter.sendMail({
      subject: 'Matricula e Liberação de Acesso - SISTEMA E-ACADEMY',
      from: 'Equipe E-ACADEMY <eacademy.adm@gmail.com>',
      to: [`${userExists.email}`],
      html: `
      <html>
      <body>
        <strong>ACESSO LIBERADO</strong></br>
        <p>Olá, sua matricula foi gerada, ela é: ${req.body.matricula_prof}</p>
        <p>Para acessar o sistema, basta usar seu e-mail e a senha que você criou no momento do cadastro</p>
      </body>
    </html>
      `,
    });

    await userExists.update({
      ...req.body,
      provider,
    });

    return res.json('Professor liberado com sucesso!');
  }
}
export default new UserController();
