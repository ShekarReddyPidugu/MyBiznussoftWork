import { createElement } from 'lwc';
import LWCEcample3RecordViewEditForm from 'c/lWCEcample3RecordViewEditForm';

describe('c-lwc-ecample3-record-view-edit-form', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-ecample3-record-view-edit-form', {
            is: LWCEcample3RecordViewEditForm
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});