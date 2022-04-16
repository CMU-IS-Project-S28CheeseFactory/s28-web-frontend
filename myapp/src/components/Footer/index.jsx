import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer = () => {
  const intl = useIntl();
  const defaultMessage = 'CMUA IS Project';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Section 28',
          title: 'Section 28',
          href: 'https://section28.com.au/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
