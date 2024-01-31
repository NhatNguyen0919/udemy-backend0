

const getHomePage = (req, res) => {
    res.send('Hello World!')
}

const getHehe = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomePage,
    getHehe
}