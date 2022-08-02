import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ZUI_EXPAND_LOADED } from '../expand.const';
import { ZuiExpandModule } from '../expand.module';

const ANIMATION_DELAY = 900;

describe('expand', () => {
    @Component({
        template: `
            <zui-expand
                [async]="async"
                [expanded]="expanded"
            >
                <ng-template zuiExpandContent>
                    <div #content>content</div>
                </ng-template>
            </zui-expand>
        `,
    })
    class TestComponent {
        @ViewChild('content')
        content!: ElementRef<HTMLDivElement>;

        expanded = false;

        async = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(
      () => {
        TestBed.configureTestingModule({
          imports: [ZuiExpandModule],
          declarations: [TestComponent],
        });
      }
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
    });

    describe('closed by default', () => {
        beforeEach(() => {
            testComponent.expanded = false;
            fixture.detectChanges();
        });

        it('content is not processed', () => {
            expect(testComponent.content).not.toBeDefined();
        });

        describe('after that expanded changes to true', () => {
            beforeEach(() => {
                testComponent.expanded = true;
                fixture.detectChanges();
            });

            it('and the content appears immediately', () => {
                expect(testComponent.content).toBeDefined();
            });

            it('and after the end of the animation, the content remains', fakeAsync(() => {
                tick(ANIMATION_DELAY);
                expect(testComponent.content).toBeDefined();
            }));
        });
    });

    describe('open by default', () => {
        beforeEach(() => {
            testComponent.expanded = true;
            fixture.detectChanges();
        });

        it('content is being processed', () => {
            expect(testComponent.content).toBeDefined();
        });

        describe('after that expanded changes to false', () => {
            beforeEach(done => {
                setTimeout(() => {
                    testComponent.expanded = false;
                    fixture.detectChanges();
                    done();
                }, 100);
            });

            it('the content does not disappear immediately', () => {
                expect(testComponent.content).toBeDefined();
            });
        });
    });

    describe('async', () => {
        beforeEach(async () => {
            testComponent.async = true;
            testComponent.expanded = false;
            fixture.detectChanges();
            testComponent.expanded = true;
            fixture.detectChanges();

            await fixture.whenStable();
        });

        it('content is being processed', () => {
            expect(testComponent.content).toBeDefined();
        });

        it('visible loader', async () => {
            await fixture.whenStable();
            fixture.detectChanges();
        });

        it('after the ZUI_EXPAND_LOADED event, the loader is hidden', fakeAsync(() => {
            const event = new CustomEvent(ZUI_EXPAND_LOADED, {bubbles: true});

            testComponent.content.nativeElement.dispatchEvent(event);
            fixture.detectChanges();
            tick(1000 / 60);
            fixture.detectChanges();
        }));
    });
});
