export async function isAdmin(req, res, next) {
    if(!req.user.isLoggedIn) {
        return res.send({
            status: 'error',
            msg: 'This route is protected = login first',
        })
    }

    return next();
}