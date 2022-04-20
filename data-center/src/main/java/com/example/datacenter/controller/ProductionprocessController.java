package com.example.datacenter.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.example.datacenter.model.domain.Productionprocess;
import com.example.datacenter.model.domain.request.ProductionprocessRequest;
import com.example.datacenter.model.domain.request.UserLoginRequest;
import com.example.datacenter.service.ProductionprocessService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;


@RestController
@RequestMapping("/productionprocess")
public class ProductionprocessController {
    @Resource
    private ProductionprocessService prodprocessService;

    @PostMapping("/add")
    public void addProductionprocess(@RequestBody ProductionprocessRequest prodprcssRequest) {
        updateProductioprocess(prodprcssRequest);
    }

    @PostMapping("/delete")
    public void deleteProductionprocess(@RequestBody ProductionprocessRequest prodprcssRequest) {
        Productionprocess prodprcss = new Productionprocess();
        prodprcss.setCheeseBatchCode(prodprcssRequest.getCheeseBatchCode());
        prodprocessService.removeById(prodprcss);
    }

    @PostMapping("/update")
    public void updateProductioprocess(@RequestBody ProductionprocessRequest prodprcssRequest) {
        Productionprocess prodprcss = new Productionprocess();
        prodprcss.setCheeseBatchCode(prodprcssRequest.getCheeseBatchCode());
        prodprcss.setCheeseID(prodprcssRequest.getCheeseID());

        prodprcss.setStep1StartTime(prodprcssRequest.getStep1StartTime());
        prodprcss.setStep1StartTemp(prodprcssRequest.getStep1StartTemp());
        prodprcss.setStep1pH(prodprcssRequest.getStep1pH());
        prodprcss.setStep1TA(prodprcssRequest.getStep1TA());

        prodprcss.setStep2StartTime(prodprcssRequest.getStep2StartTime());
        prodprcss.setStep2StartTemp(prodprcssRequest.getStep2StartTemp());
        prodprcss.setStep2pH(prodprcssRequest.getStep2pH());
        prodprcss.setStep2TA(prodprcssRequest.getStep2TA());

        prodprcss.setStep3StartTime(prodprcssRequest.getStep3StartTime());
        prodprcss.setStep3StartTemp(prodprcssRequest.getStep3StartTemp());
        prodprcss.setStep3pH(prodprcssRequest.getStep3pH());
        prodprcss.setStep3TA(prodprcssRequest.getStep3TA());

        prodprcss.setStep4StartTime(prodprcssRequest.getStep4StartTime());
        prodprcss.setStep4StartTemp(prodprcssRequest.getStep4StartTemp());
        prodprcss.setStep4pH(prodprcssRequest.getStep4pH());
        prodprcss.setStep4TA(prodprcssRequest.getStep4TA());

        prodprcss.setStep5StartTime(prodprcssRequest.getStep5StartTime());
        prodprcss.setStep5StartTemp(prodprcssRequest.getStep5StartTemp());
        prodprcss.setStep5pH(prodprcssRequest.getStep5pH());
        prodprcss.setStep5TA(prodprcssRequest.getStep5TA());

        prodprcss.setStep6StartTime(prodprcssRequest.getStep6StartTime());
        prodprcss.setStep6StartTemp(prodprcssRequest.getStep6StartTemp());
        prodprcss.setStep6pH(prodprcssRequest.getStep6pH());
        prodprcss.setStep6TA(prodprcssRequest.getStep6TA());

        prodprcss.setStep7StartTime(prodprcssRequest.getStep7StartTime());
        prodprcss.setStep7StartTemp(prodprcssRequest.getStep7StartTemp());
        prodprcss.setStep7pH(prodprcssRequest.getStep7pH());
        prodprcss.setStep7TA(prodprcssRequest.getStep7TA());

        prodprcss.setStep8StartTime(prodprcssRequest.getStep8StartTime());
        prodprcss.setStep8StartTemp(prodprcssRequest.getStep8StartTemp());
        prodprcss.setStep8pH(prodprcssRequest.getStep8pH());
        prodprcss.setStep8TA(prodprcssRequest.getStep8TA());

        prodprcss.setStep9StartTime(prodprcssRequest.getStep9StartTime());
        prodprcss.setStep9StartTemp(prodprcssRequest.getStep9StartTemp());
        prodprcss.setStep9pH(prodprcssRequest.getStep9pH());
        prodprcss.setStep9TA(prodprcssRequest.getStep9TA());

        prodprcss.setStep10StartTime(prodprcssRequest.getStep10StartTime());
        prodprcss.setStep10StartTemp(prodprcssRequest.getStep10StartTemp());
        prodprcss.setStep10pH(prodprcssRequest.getStep10pH());
        prodprcss.setStep10TA(prodprcssRequest.getStep10TA());

        prodprcss.setStep11StartTime(prodprcssRequest.getStep11StartTime());
        prodprcss.setStep11StartTemp(prodprcssRequest.getStep11StartTemp());
        prodprcss.setStep11pH(prodprcssRequest.getStep11pH());
        prodprcss.setStep11TA(prodprcssRequest.getStep11TA());

        prodprcss.setStep12StartTime(prodprcssRequest.getStep12StartTime());
        prodprcss.setStep12StartTemp(prodprcssRequest.getStep12StartTemp());
        prodprcss.setStep12pH(prodprcssRequest.getStep12pH());
        prodprcss.setStep12TA(prodprcssRequest.getStep12TA());

        prodprcss.setStep13StartTime(prodprcssRequest.getStep13StartTime());
        prodprcss.setStep13StartTemp(prodprcssRequest.getStep13StartTemp());
        prodprcss.setStep13pH(prodprcssRequest.getStep13pH());
        prodprcss.setStep13TA(prodprcssRequest.getStep13TA());

        prodprcss.setStep14StartTime(prodprcssRequest.getStep14StartTime());
        prodprcss.setStep14StartTemp(prodprcssRequest.getStep14StartTemp());
        prodprcss.setStep14pH(prodprcssRequest.getStep14pH());
        prodprcss.setStep14TA(prodprcssRequest.getStep14TA());

        prodprcss.setStep15StartTime(prodprcssRequest.getStep15StartTime());
        prodprcss.setStep15StartTemp(prodprcssRequest.getStep15StartTemp());
        prodprcss.setStep15pH(prodprcssRequest.getStep15pH());
        prodprcss.setStep15TA(prodprcssRequest.getStep15TA());

        prodprcss.setStep16StartTime(prodprcssRequest.getStep16StartTime());
        prodprcss.setStep16StartTemp(prodprcssRequest.getStep16StartTemp());
        prodprcss.setStep16pH(prodprcssRequest.getStep16pH());
        prodprcss.setStep16TA(prodprcssRequest.getStep16TA());

        prodprcss.setStep17StartTime(prodprcssRequest.getStep17StartTime());
        prodprcss.setStep17StartTemp(prodprcssRequest.getStep17StartTemp());
        prodprcss.setStep17pH(prodprcssRequest.getStep17pH());
        prodprcss.setStep17TA(prodprcssRequest.getStep17TA());

        prodprcss.setStep18StartTime(prodprcssRequest.getStep18StartTime());
        prodprcss.setStep18StartTemp(prodprcssRequest.getStep18StartTemp());
        prodprcss.setStep18pH(prodprcssRequest.getStep18pH());
        prodprcss.setStep18TA(prodprcssRequest.getStep18TA());

        prodprcss.setStep19StartTime(prodprcssRequest.getStep19StartTime());
        prodprcss.setStep19StartTemp(prodprcssRequest.getStep19StartTemp());
        prodprcss.setStep19pH(prodprcssRequest.getStep19pH());
        prodprcss.setStep19TA(prodprcssRequest.getStep19TA());

        prodprcss.setStep20StartTime(prodprcssRequest.getStep20StartTime());
        prodprcss.setStep20StartTemp(prodprcssRequest.getStep20StartTemp());
        prodprcss.setStep20pH(prodprcssRequest.getStep20pH());
        prodprcss.setStep20TA(prodprcssRequest.getStep20TA());

        prodprcss.setCreateTime(prodprcssRequest.getCreateTime());
        prodprcss.setUpdateTime(prodprcssRequest.getUpdateTime());
        prodprcss.setIsDelete(prodprcssRequest.getIsDelete());

        prodprocessService.saveOrUpdate(prodprcss);
    }

    @GetMapping("/search")
    public List<Productionprocess> searchProductionprocess() {
        QueryWrapper<Productionprocess> queryWrapper = new QueryWrapper<>();
        queryWrapper.select("*");
        return prodprocessService.list(queryWrapper);
    }


}
