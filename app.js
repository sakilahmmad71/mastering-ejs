const links = (req, res) => {
    const items = [
        { name: 'node.js', url: 'https://nodejs.org/en/' },
        { name: 'ejs', url: 'https://ejs.co' },
        { name: 'expressjs', url: 'https://expressjs.com' },
        { name: 'vuejs', url: 'https://vuejs.org' },
        { name: 'nextjs', url: 'https://nextjs.org' },
    ];

    res.render('pages/links', {
        links: items,
    });
};

const lists = (req, res) => {
    const items = ['node.js', 'expressjs', 'ejs', 'javascript', 'bootstarp'];
    res.render('pages/lists', {
        list: items,
    });
};

const tables = (req, res) => {
    const items = [
        { name: 'node.js', url: 'https://nodejs.org/en/' },
        { name: 'ejs', url: 'https://ejs.co' },
        { name: 'expressjs', url: 'https://expressjs.com' },
        { name: 'vuejs', url: 'https://vuejs.org' },
        { name: 'nextjs', url: 'https://nextjs.org' },
    ];

    res.render('pages/table', {
        table: items,
    });
};

module.exports = { links, lists, tables };
