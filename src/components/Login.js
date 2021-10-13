import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
          <SignUp>GET ALL THERE</SignUp>
          <Description> 
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.section`
  overflow: hidden;
  height: 100vh;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  box-sizing: border-box;
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 80px 40px;
  margin-bottom: 10vw;
`;

const BgImage = styled.div`
  height: 100%;
  
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`

const CTA = styled.div`
  margin-bottom: 2vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;

  max-width: 650px;

  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  transition-timing-function: ease-out;
  transition: 0.2s;
  width: 100%;
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0438ee;
  }
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.4px;
`

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`

export default Login;
