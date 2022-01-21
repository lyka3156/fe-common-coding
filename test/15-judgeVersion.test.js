import {
	shouldUpdate1,
	shouldUpdate2,
	// shouldUpdate3,
} from '../src/15-0120/judgeVersion-liuyongkang';
import rules from './15-judgeVersion.result';

let commonRules = rules.filter((rule) => !rule.external);
let externalRules = rules.filter((rule) => rule.external);

function testFn1(ruleArr) {
	for (let i = 0; i < ruleArr.length; i++) {
		let oldVersion = ruleArr[i].oldVersion;
		let newVersion = ruleArr[i].newVersion;
		let result = ruleArr[i].result;
		test(`${oldVersion} with ${newVersion} should be ${result}`, () => {
			expect(shouldUpdate1(oldVersion, newVersion)).toBe(result);
		});
	}
}
function testFn2(ruleArr) {
	for (let i = 0; i < ruleArr.length; i++) {
		let oldVersion = ruleArr[i].oldVersion;
		let newVersion = ruleArr[i].newVersion;
		let result = ruleArr[i].result;
		test(`${oldVersion} with ${newVersion} should be ${result}`, () => {
			expect(shouldUpdate2(oldVersion, newVersion)).toBe(result);
		});
	}
}

function testFn3(ruleArr) {
	for (let i = 0; i < ruleArr.length; i++) {
		let oldVersion = ruleArr[i].oldVersion;
		let newVersion = ruleArr[i].newVersion;
		let result = ruleArr[i].result;
		test(`${oldVersion} with ${newVersion} should be ${result}`, () => {
			expect(shouldUpdate3(oldVersion, newVersion)).toBe(result);
		});
	}
}

describe('根据版本号判断是否需要升级 X ∈ [0, 9]', () => {
	testFn1(commonRules);
});
describe('根据版本号判断是否需要升级 X ∈ [0, 9]', () => {
	testFn2(commonRules);
});

// describe('根据版本号判断是否需要升级 X ∈ [0, 99]', () => {
// 	testFn3(externalRules);
// });
