import jwt from 'jsonwebtoken';
import User from '../models/User';
import Professor from '../models/Professor';
import Aluno from '../models/Aluno';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, name, provider } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        provider,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async storeProf(req, res) {
    const { email, password } = req.body;
    const prof = await Professor.findOne({ where: { email } });

    if (!prof) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!(await prof.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, name, provider } = prof;

    return res.json({
      prof: {
        id,
        name,
        email,
        provider,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async storeAluno(req, res) {
    const { email, password } = req.body;
    const aluno = await Aluno.findOne({ where: { email } });

    if (!aluno) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!(await aluno.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, name, provider } = aluno;

    return res.json({
      aluno: {
        id,
        name,
        email,
        provider,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
