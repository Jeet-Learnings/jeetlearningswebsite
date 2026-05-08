content = """Pathway A: Core Engineering Route
Step 1: Complete Class 12th with Physics, Chemistry, Mathematics.
Step 2: Clear JEE/State CET for engineering admission.
Step 3: Pursue B.Tech in Nanotechnology or Materials Engineering.
Step 4: Complete internship at nano research labs or industries.
Step 5: Pursue M.Tech in Nanotechnology or Nanoscience.
Step 6: Work as Nanotechnology Engineer or Materials Design Engineer.

Pathway B: Research & Higher Studies Route
Step 1: Complete Class 12th with PCM or PCB subjects.
Step 2: Pursue B.Sc. in Physics, Chemistry, or Nanoscience.
Step 3: Learn tools like SEM, TEM, AFM, and spectroscopy.
Step 4: Clear GATE or CSIR-NET for fellowship and admission.
Step 5: Pursue M.Sc./Ph.D. from IITs, IISc, or INST Mohali.
Step 6: Join as Research Scientist at DRDO, ISRO, or CSIR labs.

Pathway C: Industry Application & Skill-Based Route
Step 1: Complete Class 12th with Science stream.
Step 2: Pursue B.Sc. in Applied Sciences or Material Science.
Step 3: Complete diploma or certificate in Nanomaterials Technology.
Step 4: Gain hands-on training in thin film or coating labs.
Step 5: Get certified in quality control or nano-safety standards.
Step 6: Work as Nano Lab Technician or Quality Control Analyst."""

lines = content.split('\n')
pathways = []
current_pathway = None

for item in lines:
    lower = item.lower()
    is_pathway_header = ('pathway ' in lower or 'route' in lower) and not lower.startswith('step')
    
    if is_pathway_header:
        if current_pathway:
            pathways.append(current_pathway)
        current_pathway = {'title': item, 'steps': []}
    elif lower.startswith('step '):
        if current_pathway:
            current_pathway['steps'].append(item)
        else:
            current_pathway = {'title': 'Standard Path', 'steps': [item]}
    elif item.strip():
        if current_pathway:
            current_pathway['steps'].append(item)
        else:
            current_pathway = {'title': item, 'steps': []}

if current_pathway:
    pathways.append(current_pathway)

print('Found {} pathways:'.format(len(pathways)))
for i, p in enumerate(pathways):
    print('\n{}. {}'.format(i+1, p['title']))
    print('   Steps: {}'.format(len(p['steps'])))
    for step in p['steps'][:2]:
        print('   - {}'.format(step[:60]))
