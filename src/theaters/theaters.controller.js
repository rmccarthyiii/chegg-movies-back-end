const service = require('./theaters.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(request, response) {
    // TODO: Add your code here **
    const { movieId } = request.params;
    let data = null;

    if (movieId) {
        data = await service.listTheatersForMovie(movieId);
    } else {
        data = await service.list();
    }

    response.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
};
