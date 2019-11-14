import React from 'react';
import NewspapersItem from './newspapers_item';

class NewspapersIndex extends React.Component {

    componentDidMount() {
        this.props.fetchNewspapers()
    }

    render() {
        const { newspapers } = this.props;

        return (
            <div>
                {
                    newspapers.map( newspaper => 
                       <NewspapersItem 
                            newspaper={newspaper}
                            key={newspaper.id}
                       />
                    )
                }
                
            </div>
        )
    }


};

export default NewspapersIndex;