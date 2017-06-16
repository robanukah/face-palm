import User from '../domain/user';

export const fetchUsers = (res) => {
    User.find({}, (err, users) => {
        sendErr(err, res);
        res.json(users);
    });
};

export const fetchUser = (req, res) => {
    User.find(req.params.user_id, (err, user) => {
        sendErr(err, res);
        res.json(user);
    });
};

export const createUser = (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        admin: req.body.admin,
    });

    user.save((err) => {
        sendErr(err);
        res.json({message: 'User created', dat: user});
    });
};

const sendErr = (err, res) => {
    if (err) {
        res.send(err);
    }
};
