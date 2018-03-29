import styled from '../theme';

import { Head, PageHeader } from './';

const Body = styled.div`
  max-width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

interface LayoutPropsType {
  title: string;
  children: React.ReactChild;
}

const Layout: React.StatelessComponent<LayoutPropsType> = ({
  title,
  children,
}) => (
  <Body>
    <PageHeader />
    <Head title={title} />
    <StyledContent>{children}</StyledContent>
  </Body>
);

export default Layout;
