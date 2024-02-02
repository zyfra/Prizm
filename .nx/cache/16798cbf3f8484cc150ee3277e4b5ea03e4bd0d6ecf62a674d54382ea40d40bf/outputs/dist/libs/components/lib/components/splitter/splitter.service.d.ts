import { Subject } from 'rxjs';
import { PrizmSplitterAreaComponent } from './area/area.component';
export declare class PrizmSplitterService {
    areaInputSizeChange$$: Subject<PrizmSplitterAreaComponent>;
    accuracy: number;
    private toFixed;
    mathOperation(a: number, b: number, operation: string): number;
}
