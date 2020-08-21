import React from 'react';
import './styles.css';

class SearchBar extends React.Component {
    state = {
        query: '',
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        selectedOption: {}
    };

    onChange = (event) => {
        let query = event.target.value;
         const filteredOptions = this.props.options.filter(
            (option) =>
                option.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
        this.setState({
            query,
            activeOption: 0,
            filteredOptions,
            showOptions: true,
        });
    }

    clearQuery = () => {
        this.setState({ query: '' });
    }

    onKeyDown = (event) => {
        const { activeOption, filteredOptions } = this.state;

        if (event.keyCode === 13) {
            if (filteredOptions && filteredOptions[activeOption]) {
                this.props.updateSelectedUser(filteredOptions[activeOption]);
                this.setState({
                    activeOption: 0,
                    showOptions: false,
                    query: filteredOptions[activeOption].name,
                    selectedOption: filteredOptions[activeOption]
                });
            }
            this.clearQuery();
        } else if (event.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            this.setState({ activeOption: activeOption - 1 });
        } else if (event.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                return;
            }
            this.setState({ activeOption: activeOption + 1 });
        }
    };
    render() {
        const {
            onChange,
            onKeyDown,
            state: { activeOption, filteredOptions, showOptions, query }
        } = this;
        let optionList;
        if (showOptions && query) {
            if (filteredOptions.length) {
                optionList = (
                    <ul className="options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {
                                className = 'option-active';
                            }
                            return (
                                <li className={className} key={index}>
                                    {optionName.name}
                                </li>
                            );
                        })}
                    </ul>
                );
            }
        }
        return (
            <React.Fragment>
                <div className="input-tag">
                    <ul className="input-tag__tags">
                        {Object.keys(this.state.selectedOption).length > 0  && <li>{this.state.selectedOption.name}</li>}
                        <li className="input-tag__tags__input">
                            <input 
                                type="text"
                                className="search-box"
                                onChange={onChange}
                                onKeyDown={onKeyDown}
                                value={query} 
                                placeholder="Search User"
                            />
                        </li>
                    </ul>
                </div>
                {optionList}
            </React.Fragment>
        );
    }
}

export default SearchBar;