import styled from '../theme';

const StyledHeaderBody = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({
    theme: { colors: { white } },
  }: {
    theme: { colors: { white: string } };
  }) => white};
  box-shadow: 0 1px 1px rgba(20, 23, 28, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageHeader: React.StatelessComponent = () => (
  <StyledHeaderBody>Header</StyledHeaderBody>
);

export default PageHeader;
