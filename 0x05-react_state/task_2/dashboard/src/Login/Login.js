import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.logIn(
      e.target.elements.email.value,
      e.target.elements.password.value
    );
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== '' && password !== '') {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(styles['App-body'])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor='email'>Email:</label>
          <input
            className={css(styles.input)}
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor='password'>Password:</label>
          <input
            className={css(styles.input)}
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handleChangePassword}
          />
          <input type='submit' value='Ok' disabled={!enableSubmit} />
        </form>
      </div>
    </React.Fragment>
  );
}

Login.propTypes = {
  logIn: PropTypes.func,
};

const styles = StyleSheet.create({
  'App-body': {
    fontSize: '1rem',
    padding: '2em',
    height: '45%',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  input: {
    margin: '10px',
  },
});

// import React, { useEffect, useState } from 'react';
// import { StyleSheet, css } from 'aphrodite';

// export class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       enableSubmit: false,
//     };
//     this.handleChangeEmail = this.handleChangeEmail.bind(this);
//     this.handleChangePassword = this.handleChangePassword.bind(this);
//     this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
//   }

//   // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [enableSubmit, setEnableSubmit] = useState(false);

//   handleLoginSubmit = (e) => {
//     e.preventDefault();
//     this.props.logIn(
//       e.target.elements.email.value,
//       e.target.elements.password.value
//     );
//   };

//   handleChangeEmail = (e) => {
//     e.preventDefault();
//     this.setState({ email: e.target.value });
//   };
//   handleChangePassword = (e) => {
//     e.preventDefault();
//     this.setState({ password: e.target.value });
//   };

//   componentDidMount() {}
//   shouldComponentUpdate(prevProps, prevState) {
//     if (
//       (prevState.email && this.state.email) === '' ||
//       (prevState.password && this.state.password === '')
//     ) {
//       if (this.state.enableSubmit === true) {
//         this.setState({ enableSubmit: false });
//         return true;
//       }
//       return true;
//     } else {
//       if (this.state.enableSubmit === false) {
//         this.setState({ enableSubmit: true });
//         return true;
//       }
//     }
//     return true;
//   }
//   // }
//   render() {
//     return (
//       <React.Fragment>
//         <div className={css(styles.marginLogin)} data-testid='app-body'>
//           <p>Login to access the full dashboard</p>
//           <form onSubmit={this.handleLoginSubmit}>
//             <label htmlFor='email'>
//               Email:{' '}
//               <input
//                 type='email'
//                 name='email'
//                 value={this.state.email}
//                 onChange={this.handleChangeEmail}
//               />
//             </label>{' '}
//             <label htmlFor='password'>
//               Password:{' '}
//               <input
//                 type='password'
//                 name='password'
//                 value={this.state.password}
//                 onChange={this.handleChangePassword}
//               />
//             </label>{' '}
//             <input
//               type='submit'
//               value='OK'
//               disabled={!this.state.enableSubmit}
//             />
//           </form>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   marginLogin: {
//     margin: '30px',
//   },
// });
