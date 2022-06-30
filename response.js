'use strict';


exports.status = (values, res) => {
    res.json({
        statis: 200,
        data: values
    });
    res.end();
}