import {obtainRobots} from './arreglos';

describe('Pruebas de arrays', () => {

  it('Debe de retornar 3 robots', () => {
    const resp = obtainRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de contener MegaMan y Ultron', () => {
    const resp = obtainRobots();
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });

});
