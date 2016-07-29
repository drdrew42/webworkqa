import React from 'react';
import FormattedProblem from './FormattedProblem'

var ProblemSummary = React.createClass({
	render: function() {
		const { problemId, problem } = this.props

		if ( ! problem ) {
			return (
				<div className="ww-problem-summary"></div>
			)
		}

		const { content, libraryId, maths } = problem

		return (
			<div className="ww-problem-summary">
				<FormattedProblem
				  itemId={problemId}
				  content={content}
				  maths={maths}
				/>

				<div className="problem-library-id">
					Problem ID: {libraryId}
				</div>
			</div>
		);
	}
});

export default ProblemSummary;
