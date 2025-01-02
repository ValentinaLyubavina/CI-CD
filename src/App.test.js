import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

it('Отображение Header, Main, Footer', () => {
    render(<App />)

        const headerElement = screen.getByText(/movieland/i);
        const footerElement = screen.getByText(/©/i); 

        expect(headerElement).toBeInTheDocument();
        expect(footerElement).toBeInTheDocument();
    });
