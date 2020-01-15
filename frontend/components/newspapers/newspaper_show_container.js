import { connect } from 'react-redux';
import { fetchNewspaper } from '../../actions/newspaper_actions';
import NewspaperShow from './newspaper_showpage';
// import { fetchComment } from '../../actions/comment_actions'

// const filterEntities = (newsComponents, newsId) => {
//   let filteredComponents = [];
//   for (const componentId in newsComponents) {
//     if (newsComponents[componentId]["news_id"] === parseInt(newspaperId)) {
//       filteredComponents.push(newsComponents[componentId]);
//     }
//   }
//   return filteredComponents;
// };


const mstp = (state, ownProps) => {
    return ({
        newspaper: state.entities.newspapers[ownProps.match.params.newspaperId],
        pulp: Object.values(state.entities.pulps),
        comment: Object.values(state.entities.comments)
        // comment: state.entities.comments[ownProps.match.params.newspaperId]
        // comment: filterEntities((state.entities.comments),ownProps.match.params.newspaperId)
    })
};

const mdtp = dispatch => ({
    fetchNewspaper: newspaperId => dispatch(fetchNewspaper(newspaperId)),
    fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(mstp, mdtp)(NewspaperShow);