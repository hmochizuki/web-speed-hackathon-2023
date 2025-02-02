import type { ReactNode } from 'react';
import { Component } from 'react';

export const DeviceType = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE',
} as const;
export type DeviceType = typeof DeviceType[keyof typeof DeviceType];

type Props = {
  children: ({ deviceType }: { deviceType: DeviceType }) => ReactNode;
};

export class GetDeviceType extends Component<Props> {
  private _rafId: number | null;
  private _windowWidth: number;

  constructor(props: Props) {
    super(props);
    this._windowWidth = window.innerWidth;
    this._rafId = null;
  }

  componentDidMount(): void {
    this._checkIsDesktop();
  }

  componentWillUnmount(): void {
    if (this._rafId != null) {
      window.cancelAnimationFrame(this._rafId);
    }
  }

  private _checkIsDesktop = () => {
    this._windowWidth = window.innerWidth;
    this.forceUpdate(() => {
      this._rafId = window.requestAnimationFrame(this._checkIsDesktop);
    });
  };

  render() {
    const { children: render } = this.props;
    return render({
      deviceType: this._windowWidth >= 1024 ? DeviceType.DESKTOP : DeviceType.MOBILE,
    });
  }
}
