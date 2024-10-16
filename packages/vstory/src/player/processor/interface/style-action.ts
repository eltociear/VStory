import type { IAction, IActionPayload } from './common-action';

export interface IComponentStylePayLoad extends IActionPayload {
  graphic?: Record<string, any>;
  text?: Record<string, any>;
}

export interface IComponentStyleAction extends IAction<IComponentStylePayLoad> {
  action: 'style';
}

export interface IComponentMoveToPayLoad extends IActionPayload {
  destination: { x: number; y: number };
}
export interface IComponentMoveToAction extends IAction<IComponentMoveToPayLoad> {
  action: 'moveTo';
}
export interface IComponentScaleToPayLoad extends IActionPayload {
  scale: { scaleX: number; scaleY: number };
}
export interface IComponentScaleToAction extends IAction<IComponentScaleToPayLoad> {
  action: 'scaleTo';
}

export interface IComponentBouncePayLoad extends IActionPayload {
  /**
   * 自定义弹跳 easing path string
   */
  customEase?: string;
  /**
   * 跳跃高度
   */
  dy?: number;
}

export interface IComponentBounceAction extends IAction<IComponentBouncePayLoad> {
  action: 'bounce';
}
