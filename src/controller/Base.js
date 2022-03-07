const error = require('../tools/error');

const deleteOne = (model) => async (req, res, next) => {
    try {
        const doc = await model.findByIdAndDelete(req.params.id);
        if (!doc) {
            return next( error(404, 'fail', 'No document found with that id'), req, res, next);
        }
        res.status(204).json({
            status: 'success',
            data: null
        });

    } catch (err) {
        next(err)
    }
}

const updateOne = (model) => async (req, res, next) => {
    try {
        const doc = await model.findByIdAndUpdate(req.params.id, req.body);
        if (!doc) {
            return next( error(404, 'fail', 'No document found with that id'), req, res, next);
        }
        res.status(204).json({
            status: 'success',
            data: { doc }
        });

    } catch (err) {
        next(err)
    }
}

const createOne = (model) => async (req, res, next) => {
    try {
        const doc = await model.create(req.body);
        if (!doc) {
            return next( error(404, 'fail', 'No document found with that id'), req, res, next);
        }
        res.status(204).json({
            status: 'success',
            data: { doc }
        });

    } catch (err) {
        next(err)
    }
}

const findOne = (model) => async (req, res, next) => {
    try {
        const doc = await model.findById(req.params.id);
        if (!doc) {
            return next( error(404, 'fail', 'No document found with that id'), req, res, next);
        }
        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });

    } catch (err) {
        next(err)
    }
}

const getAll = (model) => async (req, res, next) => { 
    try {
        const doc = await model.find();
        if (!doc) {
            return next( error(404, 'fail', 'No document found with that id'), req, res, next);
        }
        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });

    } catch (err) {
        next(err)
    }
}

module.exports = { deleteOne, updateOne, createOne, findOne, getAll }