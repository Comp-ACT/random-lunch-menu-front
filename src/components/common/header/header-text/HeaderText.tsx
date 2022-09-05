import { css } from '@emotion/react';

type Props = {
  text: string;
  fontSize: number;
  fontWeight: string;
};

function HeaderText({ text, fontSize = 12, fontWeight = 'bold' }: Props) {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize,
        fontWeight,
      })}
    >
      {text}
    </div>
  );
}

export default HeaderText;
