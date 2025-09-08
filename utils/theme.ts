import type { ThemeConfig } from 'antd'

const theme: ThemeConfig = {
  token: {
    colorPrimary: 'var(--color-brand)',
    fontFamily: 'var(--font-family-poppins)',
    borderRadius: 6,
    colorBgContainer: 'var(--color-white)',
    colorBorder: 'var(--color-gray-200)',
    colorBorderSecondary: 'var(--color-gray-100)',
  },
  components: {
    Table: {
      cellPaddingBlock: 5,
      borderColor: 'var(--color-gray-200)',
      headerBorderRadius: 0,
    },
    Button: {
      colorPrimary: 'var(--color-brand)',
      colorPrimaryHover: 'var(--color-brand-600)',
      colorPrimaryActive: 'var(--color-brand-700)',
      defaultBg: 'var(--color-brand-100)',
      defaultBorderColor: 'var(--color-brand-300)',
    },
    FloatButton: {
      fontSizeIcon: 24,
    },
    Form: {
      labelColor: 'var(--color-gray-800)',
      labelFontSize: 14,
      colorBorder: 'var(--color-gray-400)',
    },
    Input: {
      colorPrimary: 'var(--color-brand)',
      activeBorderColor: 'var(--color-brand)',
      hoverBorderColor: 'var(--color-brand-300)',
      activeShadow: '0 0 0 2px var(--color-brand)',
      controlHeight: 42,
    },
    Menu: {
      itemSelectedColor: 'var(--color-brand-700)',
      itemSelectedBg: 'var(--color-stone)',
      subMenuItemSelectedColor: 'var(--color-white)',
    },
    Tag: {
      defaultBg: 'var(--color-white)',
    },
    DatePicker: {
      cellActiveWithRangeBg: 'var(--color-brand-100)',
      addonBg: 'var(--color-brand)',
      multipleItemBg: 'var(--color-brand)',
      cellRangeBorderColor: 'var(--color-brand)',
    },
  },
}

export default theme
