function checkAuth (req, res) {
    try {
        console.log(req.user)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        return res.sendStatus(400)
    } 
}

module.exports = { checkAuth }