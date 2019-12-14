import React from 'react';
import { create } from 'react-test-renderer';

import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const instance = component.getInstance();

        expect(instance.state.status).toBe('TestStatus');
    });

    test('after creation span with status should be displayed correct', () => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const root = component.root;
        const span = root.findByType('span');

        expect(span).toBeDefined();
    });

    test('after creation input should not be displayed', () => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const root = component.root;
        const elem = root.findAllByType('input')[0];

        expect(elem).toBeUndefined();

        /* ИЛИ */
        /*
        expect(() => {
            const input = instance.findByType('input');
        }).toThrow();
        */
    });

    test('text at span after creation should be (TestStatus)', () => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const root = component.root;
        const span = root.findByType('span');

        expect(span.props.children).toBe('TestStatus');
    });

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const elem = root.findAllByType('input')[0];

        expect(elem.props.value).toBe('TestStatus');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="TestStatus" updateUserStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditStatus();

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});