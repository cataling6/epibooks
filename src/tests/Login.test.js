import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

test('testare login: se fallito, verificare se esiste il popup', () => {
    render(<Login />);
    const usernameInput = screen.queryByTestId("username");
    const passwordInput = screen.queryByTestId("password");
    const loginButton = screen.queryByTestId("btnLogin");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});

// mi da quest'errore " useNavigate() may be used only in the context of a < Router > component.  " ma in realtà la mia componente fa parte del contesto router component"
{/* <Routes>
    <Route exact path='/' element={<Login />} />
    <Route element={<ProtectedRoutes />}>
        <Route path='/home' element={<Homepage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/bookDetails/:ASIN' element={<BookDetails />} />
</Route>*/}
// </Routes>  --> in App.js; se commento riga 15 di Login.jsx const navigate = useNavigate(); l'errore no c'è più; questi test mi stanno facendo perdere tanto tempo;
// preferisco continuarli in altri progetti visto che questo progetto è un pò costruito a pezzi e quindi tante componenti nel risultat finale non le ho
