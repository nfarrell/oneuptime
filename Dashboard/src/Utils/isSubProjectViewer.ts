/**
 * @description checks of a user is a viewer of the subProject or subsubProject
 * @param {string} userId the id of the user
 * @param {object} subProject the subProject
 */

import ObjectID from 'Common/Types/ObjectID';

const isSubProjectViewer = (userId: ObjectID, subProject: $TSFixMe): void => {
    const user = subProject
        ? subProject.users.find(
              (user: $TSFixMe) =>
                  user.userId === userId && user.role === 'Viewer'
          )
        : null;
    if (user) return true;
    return false;
};

export default isSubProjectViewer;