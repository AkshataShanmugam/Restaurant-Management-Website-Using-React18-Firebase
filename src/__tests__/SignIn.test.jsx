import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import SignIn from "../../pages/SignIn.jsx";
import { expect, test, assert, describe } from "vitest";
import { MemoryRouter } from 'react-router-dom';
import { auth } from "../../pages/firebase";

auth.signInWithEmailAndPassword = async () => Promise.resolve({});

test('SignIn should have headline', () => {
    render(
    <MemoryRouter>
        <SignIn />
    </MemoryRouter>
    );
    expect(screen.getByText(/Login to your Account/i)).to.exist;
});

test('SignIn should have input fields', () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/Enter your email/i)).to.exist;
    expect(screen.getByPlaceholderText(/Enter your password/i)).to.exist;
    expect(screen.getByPlaceholderText(/Assigned table number/i)).to.exist;
});

// test('SignIn form submission', async () => {
//     // const createUserWithEmailAndPasswordStub = stub(auth, 'createUserWithEmailAndPassword').returns(Promise.resolve({}));

//     render(
//       <MemoryRouter>
//         <SignIn />
//       </MemoryRouter>
//     );

//     await fireEvent.click(screen.getByText(/Log In!/i));
     
// });
  

// test('SignIn form submission with all fields filled', async () => {
//     render(
//       <MemoryRouter>
//         <SignIn />
//       </MemoryRouter>
//     );
  
//     // Fill out the form
//     fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
//     fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
//     fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '123' } });
  
//     // Trigger form submission
//     await fireEvent.click(screen.getByText(/Log In!/i));
 

// });

test('SignIn form submission with all fields empty', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    assert.equal(alertMessage, 'Please fill in all fields.');

});

test('SignIn form submission with missing email', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
  
    // Fill out the form with missing email
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '123' } });
  
    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    assert.equal(alertMessage, 'Please fill in email ID');
});
  
test('SignIn form submission with invalid email - 1', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Fill out the form with an invalid email
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'invalidemail' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '123' } });
  
    // Trigger form submission
  
    // Assertions based on the expected behavior after form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    assert.equal(alertMessage, undefined);
});

test('SignIn form submission with invalid email - 2', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Fill out the form with an invalid email
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'invalidemail@gmail' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '123' } });
  
    // Trigger form submission
  
    // Assertions based on the expected behavior after form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    assert.equal(alertMessage, 'Please enter a valid email address');
});

test('SignIn form submission with invalid email - 3', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Fill out the form with an invalid email
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'invalidemail.gmail' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '123' } });
  
    // Trigger form submission
  
    // Assertions based on the expected behavior after form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    assert.equal(alertMessage, undefined);
});

test('SignIn form submission with missing password', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
  
    // Fill out the form with missing password
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '123' } });
  
    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    assert.equal(alertMessage, 'Please fill in password');

});
  
test('SignIn form submission with weak password', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };


    render(
        <MemoryRouter>
        <SignIn />
        </MemoryRouter>
    );

    // Fill out the form with a weak password
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'weak' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '123' } });

    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    assert.equal(alertMessage, 'Password must be at least 6 characters long');
});

test('SignIn form submission with missing table number', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
        <MemoryRouter>
        <SignIn />
        </MemoryRouter>
    );

    // Fill out the form with missing table number
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });

    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    assert.equal(alertMessage, 'Please fill in table number');
});

test('SignIn form submission with non-integer table number - 1', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
  
    // Fill out the form with a non-integer table number
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: 'abc' } });
  
    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    // Assertions based on the captured alert message
    assert.equal(alertMessage, 'Please fill in an integer table number');

});

test('SignIn form submission with non-integer table number - 2', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
  
    // Fill out the form with a non-integer table number
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '12abc12' } });
  
    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    // Assertions based on the captured alert message
    assert.equal(alertMessage, 'Please fill in an integer table number');

});

test('SignIn form submission with non-integer table number - 3', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
  
    // Fill out the form with a non-integer table number
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: 'ab12c12' } });
  
    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    // Assertions based on the captured alert message
    assert.equal(alertMessage, 'Please fill in an integer table number');

});


test('SignIn form submission with non-integer table number - 4', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
  
    // Fill out the form with a non-integer table number
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '-100' } });
  
    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    // Assertions based on the captured alert message
    assert.equal(alertMessage, 'Please fill in an integer table number');

});

test('SignIn form submission with non-integer table number - 5', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
  
    // Fill out the form with a non-integer table number
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '0' } });
  
    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    // Assertions based on the captured alert message
    assert.equal(alertMessage, 'Please fill in an integer table number');

});

test('SignIn form submission with non-integer table number - 6', async () => {
    let alertMessage;

    // Capture alert
    window.alert = (message) => {
        alertMessage = message;
    };
    
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // Fill out the form with a non-integer table number
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '12@45' } });
  
    // Trigger form submission
    await fireEvent.click(screen.getByText(/Log In!/i));
    // Assertions based on the captured alert message
    assert.equal(alertMessage, 'Please fill in an integer table number');

});

test('Wrong email or password', async () => {
  let alertMessage;

  // Capture alert
  window.alert = (message) => {
      alertMessage = message;
  };
  
  render(
    <MemoryRouter>
      <SignIn />
    </MemoryRouter>
  );

  // Fill out the form with a non-integer table number
  fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'check@gmail.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), { target: { value: 'StrongPassword123!@#' } });
  fireEvent.change(screen.getByPlaceholderText(/Assigned table number/i), { target: { value: '1245' } });

  // Trigger form submission
  await fireEvent.click(screen.getByText(/Log In!/i));
  await waitFor(() => {
      assert.equal(alertMessage, 'Wrong email or password.');
  });
});

