import User from '../domain/user';
import jwt from 'jsonwebtoken';

export const auth = (req, res) => {
    User.findOne(req.body.name, (err, user) => {
        sendErr(err, res);

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.',
            });
        } else if (user) {
            if (user.password !== req.body.password) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.',
                });
            } else {
                const token = jwt.sign(user, app.get('superSecret'), {expiresInMinutes: 1440});
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                });
            }
        }
    });
};

const sendErr = (err, res) => {
    if (err) {
        res.send(err);
    }
};
