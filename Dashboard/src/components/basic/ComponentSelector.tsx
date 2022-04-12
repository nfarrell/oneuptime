import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from './Select';

const errorStyle = {
    color: 'red',
    topMargin: '5px',
};

interface ComponentSelectorProps {
    input: object;
    className?: string;
    meta: object;
    disabled?: boolean;
    style?: object;
    id?: string;
    components: unknown[];
}

const ComponentSelector = ({
    input,
    className,
    disabled,
    meta: { touched, error },
    components,
    style,
    id
}: ComponentSelectorProps) => {
    const options = [{ value: '', label: 'Select Component' }].concat(
        components.map((component: $TSFixMe) => {
            return {
                value: component._id,
                label: component.name,
            };
        })
    );

    const filteredOpt = useRef();

    filteredOpt.current = options.filter(opt => opt.value === input.value);

    const [value, setValue] = useState({
        value: input.value,
        label:

            filteredOpt.current.length > 0

                ? filteredOpt.current[0].label
                : 'Select Component',
    });

    useEffect(() => {
        setValue({
            value: input.value,
            label:

                filteredOpt.current.length > 0

                    ? filteredOpt.current[0].label
                    : 'Select Component',
        });
    }, [input]);

    const handleChange = (option: $TSFixMe) => {
        setValue(option);
        if (input.onChange) {
            input.onChange(option.value);
        }
    };

    return (
        <span>
            <div style={{ ...style, height: '28px' }}>
                <Select

                    name={input.name}
                    value={value}
                    onChange={handleChange}
                    className={className}
                    id={id}
                    isDisabled={disabled || false}
                    options={options}
                />
            </div>
            {touched && error && <span style={errorStyle}>{error}</span>}
        </span>
    );
};

ComponentSelector.displayName = 'ComponentSelector';

function mapStateToProps(state: RootState) {
    return {
        currentProject: state.project.currentProject,
    };
}

ComponentSelector.propTypes = {
    input: PropTypes.object.isRequired,
    className: PropTypes.string,
    meta: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    id: PropTypes.string,
    components: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ComponentSelector);