import { connect } from 'react-redux'
import ProblemListItem from '../components/ProblemListItem'

const mapStateToProps = ( state, ownProps ) => {
	const { problems } = state
	const { problemId } = ownProps

	const problem = problems[ problemId ]

	const { content, excerpt } = problem

	return {
		content,
		excerpt,
		problemId
	}
}

const ProblemListItemContainer = connect(
	mapStateToProps
)(ProblemListItem)

export default ProblemListItemContainer
