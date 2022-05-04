package com.example.datacenter.controller;
import java.util.Date;
import java.util.List;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.example.datacenter.model.domain.Milkpurchase;
import com.example.datacenter.model.domain.request.MilkpurchaseRequest;
import com.example.datacenter.service.MilkpurchaseService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * @author Hongsen
 * @create 2022-04-29 16:07
 */
@RestController
@RequestMapping("/milkpurchase")
public class MilkpurchaseController {
    @Resource
    private MilkpurchaseService milkpurchaseService;

    /**
     * add, update,search, delete
     */
    @PostMapping("/add")
    public String addMilkpurchase(@RequestBody MilkpurchaseRequest milkpurchaseRequest) {
        Milkpurchase milkpurchase = new Milkpurchase();
        milkpurchase.setMilkOrderID(milkpurchaseRequest.getMilkOrderID());
        milkpurchase.setMilkOrderDate(milkpurchaseRequest.getMilkOrderDate());
        milkpurchase.setSupplierName(milkpurchaseRequest.getSupplierName());
        milkpurchase.setMilkBatchCode(milkpurchaseRequest.getMilkBatchCode());
        milkpurchase.setMilkDeliveryVolume(milkpurchaseRequest.getMilkDeliveryVolume());
        milkpurchase.setMilkDelvoTestResult(milkpurchaseRequest.getMilkDelvoTestResult());
        milkpurchase.setMilkPH(milkpurchaseRequest.getMilkPH());
        milkpurchase.setMilkTotalAcidity(milkpurchaseRequest.getMilkTotalAcidity());
        milkpurchase.setMilkTempAtCollection(milkpurchaseRequest.getMilkTempAtCollection());
        milkpurchase.setMilkTempAtDelivery(milkpurchaseRequest.getMilkTempAtDelivery());
        milkpurchase.setMilkFat(milkpurchaseRequest.getMilkFat());
        milkpurchase.setMilkSolidNonFat(milkpurchaseRequest.getMilkSolidNonFat());
        milkpurchase.setMilkProtein(milkpurchaseRequest.getMilkProtein());
        milkpurchase.setCreateTime(new Date());
        milkpurchase.setUpdateTime(new Date());
        milkpurchase.setIsDelete(0);
        milkpurchase.setIsUsed(0);

        boolean save = milkpurchaseService.save(milkpurchase);
        if (!save) {
            return "null,";
        }
        return milkpurchase.getMilkOrderID();
    }

    @PostMapping("/update")
    public String updateMilkpurchase(@RequestBody MilkpurchaseRequest milkpurchaseRequest) {
        String milkOrderID = milkpurchaseRequest.getMilkOrderID();
        if (milkOrderID == null) {
            return null;
        }

        Milkpurchase milkpurchase = milkpurchaseService.getById(milkOrderID);

        milkpurchase.setMilkOrderDate(milkpurchaseRequest.getMilkOrderDate());
        milkpurchase.setSupplierName(milkpurchaseRequest.getSupplierName());
        milkpurchase.setMilkBatchCode(milkpurchaseRequest.getMilkBatchCode());
        milkpurchase.setMilkDeliveryVolume(milkpurchaseRequest.getMilkDeliveryVolume());
        milkpurchase.setMilkDelvoTestResult(milkpurchaseRequest.getMilkDelvoTestResult());
        milkpurchase.setMilkPH(milkpurchaseRequest.getMilkPH());
        milkpurchase.setMilkTotalAcidity(milkpurchaseRequest.getMilkTotalAcidity());
        milkpurchase.setMilkTempAtCollection(milkpurchaseRequest.getMilkTempAtCollection());
        milkpurchase.setMilkTempAtDelivery(milkpurchaseRequest.getMilkTempAtDelivery());
        milkpurchase.setMilkFat(milkpurchaseRequest.getMilkFat());
        milkpurchase.setMilkSolidNonFat(milkpurchaseRequest.getMilkSolidNonFat());
        milkpurchase.setMilkProtein(milkpurchaseRequest.getMilkProtein());
        milkpurchase.setUpdateTime(new Date());

        milkpurchaseService.saveOrUpdate(milkpurchase);
        return milkpurchase.getMilkOrderID();
    }

    @GetMapping("/search")
    public List<Milkpurchase> searchMilkpurchase(String id, HttpServletRequest request) {
        QueryWrapper<Milkpurchase> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(id)) {
            queryWrapper.like("MilkOrderID", id);
        }
        return milkpurchaseService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public void deleteMilkpurchase(@RequestBody MilkpurchaseRequest request) {
        Milkpurchase milkpurchase = new Milkpurchase();
        milkpurchase.setMilkOrderID(request.getMilkOrderID());
        milkpurchaseService.removeById(milkpurchase);
    }
}
