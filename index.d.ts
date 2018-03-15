/**
 * Created by user on 2018/3/16/016.
 */
import { ClassProxyStatic } from 'class-proxy';
declare const _classPrototype: (<T>(target: ClassProxyStatic<T>) => T) & {
    default: <T>(target: ClassProxyStatic<T>) => T;
    classPrototype: <T>(target: ClassProxyStatic<T>) => T;
};
export = _classPrototype;
