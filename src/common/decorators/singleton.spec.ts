import Singleton from './singleton';

describe('Test Singleton', () => {
    it('Should create 2 instances without singleton', () => {
        const cb = jest.fn();
        class A {
            constructor() {
                cb();
            }
        }

        const instant1 = new A();
        const instant2 = new A();

        expect(instant1).not.toBe(instant2);
        expect(cb.mock.calls.length).toBe(2);
    });

    it('Should not create 2 instances with singleton', () => {
        const cb = jest.fn();
        // tslint:disable-next-line: max-classes-per-file
        @Singleton
        class B {
            constructor() {
                cb();
            }
        }

        const instant1 = new B();
        const instant2 = new B();

        expect(instant1).toBe(instant2);
        expect(cb.mock.calls.length).toBe(1);
    });
});
