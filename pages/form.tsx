import { NextPage } from "next";
import styled from "styled-components";
import { FunctionComponent } from "react";

const Root = styled.div`
  display: flex;
  flex-grow: 1;
`;

const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Asterix = styled.div`
  color: red;
`;

const Label = styled.div`
  color: gray;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  width: 5.5rem;
`;

const RowRoot = styled.div`
  display: flex;
`;

const InputRow: FunctionComponent<{ caption: string }> = ({ caption }) => {
  return (
    <div>
      <Asterix>*</Asterix>
      <Label>{caption}</Label>
    </div>
  );
};

const CheckBoxRow: FunctionComponent = () => {
  return (
    <div>
      <input type="checkbox" />
      <span> Remember me</span>
    </div>
  );
};

const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1677ff;
  color: white;
  width: 4.875rem;
  height: 2rem;
  cursor: pointer;
  border-radius: 0.25rem;
`;

const SubmitRow: FunctionComponent = () => {
  return (
    <RowRoot>
      <Spacer />
      <Submit>Submit</Submit>
    </RowRoot>
  );
};

const Form: FunctionComponent<{ username: string }> = ({ username }) => {
  return (
    <FormRoot>
      <InputRow caption="Username" />
      <InputRow caption="Password" />
      <CheckBoxRow />
      <SubmitRow />
    </FormRoot>
  );
};

const FormPage: NextPage = () => {
  return (
    <Root>
      <Form username="adsadas" />
    </Root>
  );
};

export default FormPage;
