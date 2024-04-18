import { userState } from 'react'
import {Box,Button,TextField, styled, Typography} from '@mui/material'

const Component= styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Wrapper= styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div , & > Button, & >p{
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB641B;
  color: #fff;
  height: 48px;
  border-radius: 2px;

`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0/20%);

`;

const Text= styled(Typography)`
  color: #878787;
  font-size: 16px;

`;

 const [account, toggleAccount] = userState('login');

 const toggleSignup = ()=>{
      account=== 'signup' ? toggleAccount('login') : toggleAccount('signup');
 };

const Login = () => {
  return (
    <Component>
      <Box>
        {
          account === 'login' ?
            <Wrapper>
              <TextField variant="standard" label='Enter userame'/>
              <TextField variant="standard" label='Enter password'/>
              <LoginButton variant= "contained"> Login</LoginButton>
              <Text style={{textAlign: 'center'}}>OR</Text>
              <SignupButton onClick={()=>toggleSignup()}>create an account</SignupButton>
            </Wrapper>
            :
            <Wrapper>
              <TextField variant="standard" label='Enter name'/>
              <TextField variant="standard" label='Enter username'/>
              <TextField variant="standard" label='Enter password'/>
              <SignupButton>Sign in</SignupButton> 
              <Text style={{textAlign: 'center'}}>OR</Text>
              <LoginButton variant= "contained"  onClick={()=> toggleAccount()}> Already have an account</LoginButton>
            </Wrapper>
        }
      </Box>
    </Component>
  )
}

export default Login;