import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '../components/Welcome';


test('Il componente viene montato correttamente', () => {
    // Renderizza il componente
    const { getByTestId } = render(<Welcome />);

    // Verifica che il componente esista nel DOM
    const componentNode = getByTestId('welcomeId');
    expect(componentNode).toBeInTheDocument("componente montato ");
});