const sendErrorResponse = require('../middlewares/response').sendErrorResponse;
import ErrorService from '../services/errorService'
// @ts-expect-error ts-migrate(2614) FIXME: Module '"../utils/config"' has no exported member ... Remove this comment to see the full error message
import { clusterKey as CLUSTER_KEY} from '../utils/config'

export default {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'req' implicitly has an 'any' type.
    isAuthorizedService: async function(req, res, next) {
        try {
            let clusterKey;

            if (req.params && req.params.clusterKey) {
                clusterKey = req.params.clusterKey;
            } else if (req.query && req.query.clusterKey) {
                clusterKey = req.query.clusterKey;
            } else if (
                req.headers &&
                (req.headers['clusterKey'] || req.headers['clusterkey'])
            ) {
                // header keys are automatically transformed to lowercase
                clusterKey =
                    req.headers['clusterKey'] || req.headers['clusterkey'];
            } else if (req.body && req.body.clusterKey) {
                clusterKey = req.body.clusterKey;
            } else {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'Cluster key not found.',
                });
            }

            const isAuthorized = clusterKey === CLUSTER_KEY;

            if (!isAuthorized) {
                return sendErrorResponse(req, res, {
                    code: 400,
                    message: 'Invalid cluster key provided',
                });
            }

            return next();
        } catch (error) {
            ErrorService.log('serviceAuthorization.isAuthorizedService', error);
            throw error;
        }
    },
};
