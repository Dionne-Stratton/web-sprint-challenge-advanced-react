import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
        render(<CheckoutForm />);
        const formHead = screen.getByText(/checkout form/i);
        expect(formHead).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city = screen.getByLabelText(/city:/i)
    const state = screen.getByLabelText(/state:/i)
    const zip = screen.getByLabelText(/zip:/i)

    const checkoutBtn = screen.getByRole('button', { name: /checkout/i })

    fireEvent.change(firstName, { target: { value: 'nunya' } } )
    fireEvent.change(lastName, { target: { value: 'bidness' } } )
    fireEvent.change(address, { target: { value: '404 null st.' } } )
    fireEvent.change(city, { target: { value: 'nowheresville' } } )
    fireEvent.change(state, { target: { value: 'na' } } )
    fireEvent.change(zip, { target: { value: '40404' } } )
    
    fireEvent.click(checkoutBtn)

    expect(await screen.getByText(/nowheresville/)).toBeInTheDocument()
});
