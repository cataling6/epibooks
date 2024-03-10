import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '../components/Welcome';


test('Il componente viene montato correttamente', () => {

    const { getByTestId } = render(<Welcome />);

    const componente = getByTestId('welcomeId');
    expect(componente).toBeInTheDocument("componente montato ");
});